
import { Hospital, FileText, Calendar, CreditCard, Users, Bell } from "lucide-react";

const features = [
  {
    name: "Hospital Profile Management",
    description: "Create and manage comprehensive hospital profiles with service listings, facility details, accreditations, and more.",
    icon: Hospital,
  },
  {
    name: "Patient Data Management",
    description: "Access centralized patient records digitally through ABHA Health ID, share reports with other facilities, and ensure continuity of care.",
    icon: FileText,
  },
  {
    name: "Appointment Scheduling",
    description: "Provide a seamless booking system for patients, including telemedicine options and real-time doctor availability.",
    icon: Calendar,
  },
  {
    name: "Billing & Payment Integration",
    description: "Process online payments, validate insurance coverage, and generate digital medical bills for faster reimbursements.",
    icon: CreditCard,
  },
  {
    name: "Staff & Doctor Management",
    description: "List doctors with their specializations, manage shifts, and collect patient feedback for continuous improvement.",
    icon: Users,
  },
  {
    name: "Emergency Care Management",
    description: "Send real-time alerts for emergency services, critical care units, and provide direct contact options for urgent needs.",
    icon: Bell,
  },
];

const HospitalFeatures = () => {
  return (
    <div id="hospitals" className="bg-white py-12 sm:py-16">
      <div className="section-container">
        <div className="lg:text-center">
          <h2 className="text-base text-medical-blue font-semibold tracking-wide uppercase">For Hospitals</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Streamline Hospital Operations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Comprehensive tools to manage your facility, staff, and patient care efficiently.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="feature-card">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-blue text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFeatures;
