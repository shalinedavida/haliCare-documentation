"use client"
import React from "react";
import { SiTicktick } from "react-icons/si";
import Navbar from "../shared-components/Navbar";
import Footer from "../shared-components/Footer";
import { BsLaptopFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import Image from 'next/image';


function HomePage() {
  return (
    <div className="min-h-screen flex flex-col to-white text-gray-800">
    <Navbar/>
      <div className="text-center py-24 px-6 bg-[#001F54] text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight"> Welcome to <span className="text-[#17DFF9]">HaliCare</span></h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 text-white">
            A digital healthcare platform connecting patients to operational clinics
            ensuring timely access to care through real-time data, mobile integration,
            and clinic dashboards.
          </p>
          <button className="bg-[#17DFF9] text-[#193479] font-semibold px-8 py-3 rounded-full">Explore Documentation </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-5xl font-bold text-[#193479] mb-6">Overview</h2>
        <p className="max-w-4xl mx-auto leading-relaxed mb-10 text-lg">
          HaliCare bridges the gap between patients and clinics by providing real-time access
          to healthcare facilities. It comprises of a clinician’s web dashboard and a patient’s
          mobile app both powered. The goal of HaliCare is to help patients recently affected by the closure of USAID clinics
          locate functioning clinics nearby, book appointments, and receive continuous care.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-[#D9D9D9] shadow-lg rounded-3xl p-8 border border-gray-100">
            <FaServer className="w-20 h-20 text-[#193479] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-[#193479] mb-2">Backend</h3>
            <p className="leading-relaxed text-lg">
              The Django REST backend handles authentication, data flow, and API endpoints that
              connect the clinician and patient interfaces seamlessly.
            </p>
          </div>
          <div className="bg-[#D9D9D9] shadow-lg rounded-3xl p-8 border border-gray-100">
            <BsLaptopFill className="w-20 h-20 text-[#193479] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-[#193479] mb-2">Clinician Dashboard</h3>
            <p className="text-lg">
              Built with Next.js, the dashboard provides clinicians with tools to manage their clinics
              by enabling real time information of their services and operating status.
            </p>
          </div>
          <div className="bg-[#D9D9D9] shadow-lg rounded-3xl p-8 border border-gray-100">
            <GiSmartphone className="w-20 h-20 text-[#193479] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-[#193479] mb-2">Patient Mobile App</h3>
            <p className="text-lg">
              Created using Kotlin, the mobile app enables patients to locate nearby clinics,
              view details, and make appointments using real-time data from the clinics.
            </p>
          </div>
        </div>
      </div>

      <div className=" py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-[#193479] mb-6">
            System Architecture
          </h2>
          <p className="text-lg mb-20">
            HaliCare follows a modular architecture that separates the web frontend,
            mobile frontend, and backend services. All components communicate via secure
            RESTful APIs powered by Django. The backend stores data in PostgreSQL and
            integrates authentication and access control.
          </p>
          <Image
            src="/images/Blank board (1).png"
            alt="System Architecture Diagram" height={600} width={900}
            className="mx-auto rounded-2xl shadow-md border border-gray-200"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-[#193479] mb-3">Quality Assurance</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Every feature undergoes comprehensive testing to ensure HaliCare remains reliable,
            secure, and consistent across devices. THis cuts accross in both the mobile app and the web dashboard.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#193479] mb-4">Automated Testing</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center"> <SiTicktick className="w-5 h-5 text-green-600 mr-2"/>Backend unit testing</li>
              <li className="flex items-center"><SiTicktick className="w-5 h-5 text-green-600 mr-2"/> API validation with Jest and Postman</li>
              <li className="flex items-center"><SiTicktick className="w-5 h-5 text-green-600 mr-2"/> Continuous testing in CI/CD pipelines </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#193479] mb-4">Manual Testing</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center"><SiTicktick className="w-5 h-5 text-green-600 mr-2"/> Cross-device interface testing</li>
              <li className="flex items-center"><SiTicktick className="w-5 h-5 text-green-600 mr-2"/> Browser and OS compatibility checks</li>
              <li className="flex items-center"><SiTicktick className="w-5 h-5 text-green-600 mr-2"/> Accessibility and usability testing</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;