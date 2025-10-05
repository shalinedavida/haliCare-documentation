"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Backend", href: "/backend" },
    { name: "Frontend Web", href: "/frontend-web" },
    { name: "Frontend Mobile", href: "/frontend-mobile" },
  ];
  return (
    <nav className="sticky top-0 bg-[#001F54]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <Image src="/images/halicarelogo.png" alt="HaliCare Logo" width={70} height={70} />
        <h1 className="flex items-center">
          <span className="text-3xl font-bold text-[#17DFF9]">HaliCare<span className="text-white ml-3">Documentation</span></span>
        </h1>
        <ul className="hidden md:flex gap-10 text-xl font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={`transition-all duration-300 ${pathname === item.href  ? "text-white border-b-2 border-white pb-1"  : "text-[#17DFF9] hover:text-white" }`} >
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