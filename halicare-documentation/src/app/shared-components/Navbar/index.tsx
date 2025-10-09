"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Backend Architecture", href: "/backend" },
    { name: "Frontend Web", href: "/frontend-web" },
    { name: "Frontend Mobile", href: "/frontend-mobile" },
  ];

  return (
    <nav className="sticky top-0 bg-[#001F54] z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <div className="flex items-center gap-5">
          <Image
            src="/images/halicarelogo.png"
            alt="HaliCare Logo"
            width={70}
            height={70}
            priority
            sizes="(max-width: 768px) 50px, 70px"
            className="object-contain"
          />
          <h1 className="text-3xl font-bold text-[#17DFF9] ml-4">
            HaliCare <span className="text-white ml-1 font-bold">Documentation</span>
          </h1>
        </div>
        <ul className="hidden md:flex gap-10 text-xl font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-all duration-300 ${
                  pathname === item.href
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-[#17DFF9] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md bg-[#001F54] text-[#17DFF9] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#17DFF9]"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden bg-[#001F54] transition-max-height duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block text-lg font-bold ${
                  pathname === item.href ? "text-white" : "text-[#17DFF9] hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
