import React from 'react';
import Navbar from '../shared-components/Navbar';
import Footer from '../shared-components/Footer';

const BackendDocumentation = () => {
  return (
    <div className="min-h-screen flex flex-col" id="backend">
      <Navbar />

      <div className="w-full bg-[#001F54] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            HaliCare <span className="text-[#17DFF9] ml-2">Backend Architecture</span>
          </h1>
          <p className="text-base sm:text-lg md:text-lg leading-relaxed max-w-4xl mx-auto">
            A Django-powered system connecting HIV/AIDS patients with operational clinics in Kenya 
            after USAID funding withdrawal built for resilience, real-time accuracy, and patient-centered care.
          </p>
        </div>
      </div>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6 mt-12">
          Project Structure
        </h2>
        <div className="bg-[#D9D9D9] shadow-lg rounded-3xl p-8 border border-gray-100 max-w-full overflow-x-auto">
          <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
{`halicare/
├── api/                 # Core API endpoints
├── appointment/         # Appointment booking logic
├── arv/                 # ARV availability management
├── center/              # Clinic/Counseling Center models
├── env/                 # Environment config
└── halicare/            # Main Django app`}
          </pre>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Django 4.2", icon: "" },
            { name: "DRF", icon: "" },
            { name: "PostgreSQL", icon: "" },
            { name: "Heroku", icon: "" }
          ].map((tech, idx) => (
            <div
              key={idx}
              className="group bg-white p-5 rounded-3xl shadow-lg border border-gray-100 hover:border-[#597DD8] hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
            >
              <span className="text-3xl mb-3 block">{tech.icon}</span>
              <span className="font-medium text-gray-900 group-hover:text-[#597DD8] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6">
          Core Data Models
        </h2>
        <div className="bg-[#D9D9D9] rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-300 px-4 py-3 flex justify-between items-center border-b border-gray-400">
            <span className="text-gray-700 text-sm font-mono">models.py</span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </div>
          </div>
          <pre className="text-gray-900 p-6 text-sm overflow-x-auto font-mono whitespace-pre-wrap">
{`# Custom User Model
class CustomUser(models.Model):
    user_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    phone_number = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    USER_TYPES = [('PATIENT', 'Patient'), ('CLINICIAN', 'Clinician')]
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    date_joined = models.DateTimeField(auto_now_add=True)

# Counseling Center / Clinic
class CounselingCenter(models.Model):
    center_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    center_name = models.CharField(max_length=100)
    center_type = models.CharField(max_length=50)  # e.g., "counseling_center"
    address = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    contact_number = models.CharField(max_length=20)
    operational_status = models.CharField(max_length=20)  # "active", "closed"
    updated_at = models.DateTimeField(auto_now=True)

# Real-time Service Status
class Service(models.Model):
    service_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    center = models.ForeignKey(CounselingCenter, on_delete=models.CASCADE)
    service_name = models.CharField(max_length=100)  # "ARV Refills", "HIV Screening"
    status = models.CharField(max_length=20)         # "Available", "Not Available"
    last_updated = models.DateTimeField(auto_now=True)

# Appointment Booking
class Appointment(models.Model):
    appointment_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    center = models.ForeignKey(CounselingCenter, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    booking_status = models.CharField(max_length=20)  # "confirmed", "cancelled"
`}
          </pre>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6">
          API Endpoints
        </h2>
        <div className="space-y-4">
          {[
            { method: "GET", path: "/api/counseling-centers/", desc: "List all clinics with geolocation & status" },
            { method: "GET", path: "/api/services/", desc: "Real-time service availability (ARV, HIV testing, etc.)" },
            { method: "GET", path: "/api/arvavailability/", desc: "Dedicated ARV stock status per clinic" },
            { method: "GET", path: "/api/nearby-centers/", desc: "Find clinics near user (uses Haversine formula)" },
            { method: "GET", path: "/api/appointment/", desc: "View/manage patient appointments" },
            { method: "GET", path: "/api/users/", desc: "Patient & clinician profiles (role-based)" }
          ].map((ep, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center bg-white p-4 rounded-3xl border border-gray-200 hover:border-[#597DD8] hover:shadow-lg transition-all duration-300 group"
            >
              <span className="font-mono font-bold text-[#597DD8] w-24 mb-2 sm:mb-0 group-hover:text-[#001F54] transition-colors">{ep.method}</span>
              <span className="font-mono text-gray-800 flex-grow group-hover:text-[#001F54] transition-colors">{ep.path}</span>
              <span className="text-gray-600 mt-2 sm:mt-0 sm:ml-4 group-hover:text-[#001F54] transition-colors">{ep.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6">
          User Workflows
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:border-[#597DD8] hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-lg text-[#193479] mb-3">Patient Journey</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-base sm:text-lg">
              <li>Search nearby clinics using geolocation</li>
              <li>View real-time ARV & service availability</li>
              <li>Book appointment for counseling or ARV refill</li>
              <li>Receive confirmation via SMS/app</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:border-[#597DD8] hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-lg text-[#193479] mb-3">Clinician Workflow</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-base sm:text-lg">
              <li>Log in to dashboard</li>
              <li>Update clinic status (open/closed)</li>
              <li>Mark ARV/services as available/unavailable</li>
              <li>Manage incoming appointments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6">
          Security & Data Sensitivity
        </h2>
        <div className="max-w-full text-[#193479]">
          <p className="mb-3 font-semibold">
            Healthcare Data Protection: HaliCare handles sensitive HIV/AIDS-related information. All data is:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#193479] text-base sm:text-lg">
            <li>Encrypted in transit (HTTPS) and at rest (Heroku PostgreSQL)</li>
            <li>Access controlled via role-based permissions (PATIENT vs CLINICIAN)</li>
            <li>Never logs full phone numbers or identifiable health details in plaintext</li>
            <li>Aligned with Kenya’s Data Protection Act (2019)</li>
          </ul>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193479] mb-6">
          Deployment
        </h2>
        <div className="max-w-full text-[#193479]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-semibold w-36">Platform:</span>
            <span>Heroku (dyno + PostgreSQL add-on)</span>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-semibold w-36">WSGI:</span>
            <span>Gunicorn with Whitenoise for static files</span>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-semibold w-36">Environment:</span>
            <span>
              Managed via <code className="bg-[#597DD8]/20 px-1 rounded">django-environ</code> and{' '}
              <code className="bg-[#597DD8]/20 px-1 rounded">python-dotenv</code>
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackendDocumentation;
