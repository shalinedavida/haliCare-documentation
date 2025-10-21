"use client";
import Image from 'next/image';

import Navbar from '../shared-components/Navbar';
import Footer from '../shared-components/Footer';

export default function MobileDocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-[#001F54] text-white py-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mobile App Technical Documentation</h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Built with Kotlin for Android, the HaliCare Patient Mobile App empowers users to locate clinics, book appointments,and receive real-time updates all through an intuitive, accessible, and secure interface.
        </p>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center">Overview</h2>
        <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
          The HaliCare Mobile App serves as the patient-facing interface, enabling seamless interaction with clinic services via RESTful APIs powered by Django. It is designed for usability, performance, and accessibility across a wide range of Android devices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#001F54" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#001F54]">Core Functionality</h3>
            <p className="text-gray-700">Locate nearby clinics, book &amp; manage appointments, view service details, and access health tips.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#001F54" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M15 19v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M15 9M12 12h.01M12 18h.01M12 6h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#001F54]">Tech Stack</h3>
            <p className="text-gray-700">Kotlin, Jetpack Compose, Retrofit, Coroutines.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#001F54" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#001F54]">Integration</h3>
            <p className="text-gray-700">Securely connects to Django REST API for authentication, data fetching, and appointment booking using JWT tokens.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center">UI/UX Implementation</h2>
        <p className="text-gray-700 mb-12 text-center max-w-4xl mx-auto">
          The HaliCare Android app follows Material Design 3 principles with a focus on accessibility, performance, and intuitive navigation. Key user flows are documented below with implementation context.
        </p>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-[#001F54] mb-8 text-center"> Onboarding &amp; Authentication</h3>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/teaser-1.png"
                  alt="Welcome Screen - Onboarding Step 1"
                  width={300}
                  height={550}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
                <div className="absolute -top-3 -left-3 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 1
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Welcome Screen</h4>
              <p className="text-gray-600 leading-relaxed">
                Introduces the app&apos;s purpose with a clear “Get Started” CTA. Built with Jetpack Compose&apos;s <code>Column</code> and <code>TextButton</code>. Includes a subtle “Skip” option for returning users in the top-right corner.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-6 lg:gap-12 mb-8">
            <div className="transform -rotate-3">
              <div className="w-[280px] relative">
                <Image
                  src="/images/sign-up.png"
                  alt="Sign Up Form"
                  width={280}
                  height={500}
                  className="rounded-xl shadow-xl border border-gray-300"
                />
                <div className="absolute -top-3 -left-3 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Sign Up
                </div>
              </div>
            </div>

            <div className="transform rotate-3">
              <div className="w-[280px] relative">
                <Image
                  src="/images/sign-in.png"
                  alt="Sign In Form"
                  width={280}
                  height={500}
                  className="rounded-xl shadow-xl border border-gray-300"
                />
                <div className="absolute -top-3 -right-3 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Sign In
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left max-w-4xl mx-auto px-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Authentication Flow</h4>
            <p className="text-gray-600 leading-relaxed">
              The app supports secure user onboarding via <strong>Sign Up</strong> (phone + password) and returning access via <strong>Sign In</strong>. 
              Both forms use real-time validation, error handling, and JWT-based authentication with the Django backend. 
              Passwords are never stored locally; tokens are secured using <code>EncryptedSharedPreferences</code>. 
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-[#001F54] mb-8 text-center">Clinic Discovery</h3>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/Find-clinics.png"
                  alt="Location Permission Request"
                  width={300}
                  height={550}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 4
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Location Permission</h4>
              <p className="text-gray-600 leading-relaxed">
                Requests coarse location access to find nearby clinics. If denied, falls back to manual address input. Permission handled via <code>ActivityResultContracts.RequestPermission()</code> in Compose.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/counseling.png"
                  alt="Find Clinics List"
                  width={300}
                  height={550}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
                <div className="absolute -top-3 -left-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 5
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Clinics List</h4>
              <p className="text-gray-600 leading-relaxed">
                Displays paginated clinic results sorted by distance. Uses <code>LazyColumn</code> with pull-to-refresh and infinite scroll. Each item is a reusable <code>ClinicCard</code> composable.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/clinic-detail.png"
                  alt="Clinic Detail Page"
                  width={300}
                  height={550}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 6
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Clinic Detail</h4>
              <p className="text-gray-600 leading-relaxed">
                Shows clinic name, services, operating hours, and rating. Includes a prominent “Book Appointment” button. Data is cached locally using Room to improve offline experience.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#001F54] mb-8 text-center"> Appointment Booking Flow</h3>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/appointment.png"
                  alt="Book Appointment Calendar"
                  width={300}
                  height={550}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
                <div className="absolute -top-3 -left-3 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 7
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Calendar View</h4>
              <p className="text-gray-600 leading-relaxed">
                Custom calendar built with <code>LazyVerticalGrid</code>. Available slots are highlighted in green; unavailable dates are grayed out. State is managed via <code>ViewModel</code> with <code>StateFlow</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center">Mobile Architecture</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Data Flow</h3>
            <ul className="space-y-2 text-gray-700">
              <li> User interacts with Composable UI components</li>
              <li> ViewModel handles business logic and state</li>
              <li> Repository layer fetches data via Retrofit</li>
              <li> Room Database caches responses locally</li>
              <li> LiveData/StateFlow updates UI reactively</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Key Libraries</h3>
            <ul className="space-y-2 text-gray-700">
              <li> Jetpack Compose (UI)</li>
              <li> Retrofit + OkHttp (Networking)</li>
              <li> Room (Local Persistence)</li>
              <li> Hilt (Dependency Injection)</li>
              <li> Coroutines + Flow (Asynchronous Operations)</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
