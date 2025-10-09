import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

function Footer() {
  return (
    <footer className="w-full bg-[#001F3F] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12 text-sm">
        <Image src="/images/halicarelogo.png" alt="HaliCare Logo" width={70} height={70} />

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">HaliCare Documentation</h2>
          <p className="">
            Developer documentation for the HaliCare ecosystem. Linking patients
            to clinics through web and mobile interfaces built with secure APIs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="text-white hover:text-[#17DFF9]">Home</Link></li>
            <li><Link href="/backend" className="text-white hover:text-[#17DFF9]">Backend</Link></li>
            <li><Link href="/frontend-web" className="text-white hover:text-[#17DFF9]">Frontend Web</Link></li>
            <li><Link href="/frontend-mobile" className="text-white hover:text-[#17DFF9]">Frontend Mobile</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Connect With Us</h2>
          <div className="flex gap-6">
            <Link href="https://www.instagram.com/?hl=en" target="_blank">
              <FaSquareInstagram className="text-white hover:text-[#17DFF9] w-8 h-8"/>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-white hover:text-[#17DFF9] w-8 h-8"/>
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="text-white hover:text-[#17DFF9] w-8 h-8"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-6 text-xs text-white">
        © Copyright @ HaliCare {new Date().getFullYear()}
      </div>
    </footer>
  );
}


export default Footer;