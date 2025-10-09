'use client'
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../shared-components/Navbar";
import Footer from "../shared-components/Footer";
import {
  FaUser,
  FaHome,
  FaChartBar,
  FaCalendarAlt,
  FaSignOutAlt,
  FaTools,
  FaSearch,
  FaTable,
  FaPlus,
  FaEdit,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";
export default function Docs() {
  return (
    <>
      <Head>
        <title>Clinic Dashboard - Frontend Documentation</title>
      </Head>
      <div className="min-h-screen flex flex-col">
   
        <Navbar />
     
        <header className="text-center py-20 px-6 bg-gradient-to-b from-blue-950 via-blue-800 to-blue-600 text-white">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
            Clinic Dashboard - Frontend Documentation
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Complete guide to the frontend features of the clinician dashboard
          </p>
       
          <Link href="/dashboard" className="inline-block">
            <button className="bg-[#17DFF9] text-[#193479] font-semibold px-10 py-4 rounded-full text-xl hover:scale-105 transition transform flex items-center gap-2">
              Go to Dashboard <FaArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </header>
      
        <main className="flex-1 max-w-6xl mx-auto px-6 py-20 space-y-12 bg-white text-gray-800">
       
          <DocSection
            icon={<FaUser className="h-10 w-10 text-blue-600" />}
            title="Teaser / Welcome Screen"
          >
            When a user first opens Halicare, they see the welcome teaser screen:
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Message: <strong>&quot;Welcome to Halicare&quot;</strong></li>
              <li>Short description of the platform features</li>
              <li>
                clicking the  proceed button takes the user to the signup page.
              </li>
            </ul>
          </DocSection>
      
          <DocSection
            icon={<FaUser className="h-10 w-10 text-blue-600" />}
            title="Authentication (Signup & Login)"
          >
            Users can create an account using their PhoneNumber,FirstName,LastName and password, then log in to access the dashboard. After logging in, users are prompted to register their clinic before accessing full functionality.
          </DocSection>
         
          <DocSection
            icon={<FaHome className="h-10 w-10 text-blue-600" />}
            title="Clinic Registration"
          >
            Clinicians provide their clinic details:
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Clinic Name</li>
              <li>Address &amp; Contact Info</li>
              <li>Opening and Closing Hours</li>
            </ul>
          </DocSection>
        
          <DocSection
            icon={<FaChartBar className="h-10 w-10 text-blue-600" />}
            title="Dashboard Analytics"
          >
            The dashboard visualizes clinic performance:
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Monthly patient visits (Graph)</li>
              <li>Total service Offered</li>
              <li>Service distribution (Pie Chart)</li>
              <li>Quick stats: total Services, upcoming appointments, etc.</li>
            </ul>
          </DocSection>
        
          <DocSection
            icon={<FaCalendarAlt className="h-10 w-10 text-blue-600" />}
            title="Appointments Management"
          >
            The appointments page allows clinicians to:
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Filter by date using the calendar picker.</li>
              <li>
                <FaSearch className="inline-block w-4 h-4 mr-1 text-blue-600" />
                Search patients by name.
              </li>
              <li>
                <FaTable className="inline-block w-4 h-4 mr-1 text-blue-600" />
                View appointments in a responsive table:
                <ul className="list-disc ml-6 mt-1">
                  <li>Patient Name</li>
                  <li>Status: Complete, Upcoming, Cancelled</li>
                  <li>Type: New / Existing Patient</li>
                </ul>
              </li>
              <li>Responsive tabs show total counts per status (e.g., 30 Complete, 12 Upcoming)</li>
              <li>Pagination is available for easy navigation through large datasets.</li>
            </ul>
          </DocSection>
          
          <DocSection
            icon={<FaTools className="h-10 w-10 text-blue-600" />}
            title="Services Management"
          >
            Clinicians can manage services offered:
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>
                <FaSearch className="inline-block w-4 h-4 mr-1 text-blue-600" />
                Search existing services
              </li>
              <li>
                <FaPlus className="inline-block w-4 h-4 mr-1 text-blue-600" />
                Add new services
              </li>
              <li>
                Action buttons: <FaEdit className="inline-block w-4 h-4 mr-1 text-green-600"/> Edit, <FaTrash className="inline-block w-4 h-4 mr-1 text-red-600"/> Delete
              </li>
              <li>Edit clinic contact info directly at the top of the page.</li>
              <li>Paginations</li>
            </ul>
          </DocSection>
     
          <DocSection
            icon={<FaSignOutAlt className="h-10 w-10 text-blue-600" />}
            title="Logout"
          >
            Clicking logout safely logs the user out and redirects them back to the login page.
          </DocSection>
        </main>
      
        <Footer />
      </div>
    </>
  );
}


function DocSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 items-start bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h2 className="text-3xl font-semibold mb-2 text-blue-600">{title}</h2>
        <div className="text-gray-700 leading-relaxed text-lg">{children}</div>
      </div>
    </div>
  );
}
