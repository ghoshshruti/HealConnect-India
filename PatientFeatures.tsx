
import { Bell, FileText, Calendar, Heart, CreditCard, MapPin, Users } from "lucide-react";

const features = [
  {
    name: "User-Friendly Interface",
    description: "Simple navigation with multilingual support and voice assistance for easier platform interaction.",
    icon: Users,
  },
  {
    name: "Health Record Access",
    description: "Access your digital health records anytime and upload previous medical documents to share with healthcare providers.",
    icon: FileText,
  },
  {
    name: "Appointment Booking",
    description: "Easily book appointments with available doctors and specialists, with options for in-person or video consultations.",
    icon: Calendar,
  },
  {
    name: "Medicine Tracking & Reminders",
    description: "Check medicine availability in nearby pharmacies and receive timely reminders for taking your medication.",
    icon: Bell,
  },
  {
    name: "Payment & Insurance",
    description: "Make online payments for medical services and submit insurance claims directly through the platform.",
    icon: CreditCard,
  },
  {
    name: "Feedback & Ratings",
    description: "Rate doctors and hospitals after consultations to help improve healthcare quality for everyone.",
    icon: Heart,
  },
  {
    name: "Health Tracking & Wellness",
    description: "Monitor your health progress and receive personalized health plans based on your data.",
    icon: MapPin,
  }
];

const PatientFeatures = () => {
  return (
    <div id="patients" className="bg-white py-12 sm:py-16">
      <div className="section-container">
        <div className="lg:text-center">
          <h2 className="text-base text-medical-orange font-semibold tracking-wide uppercase">For Patients</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Healthcare at Your Fingertips
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Access quality healthcare services, manage your health records, and book appointments with ease.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="feature-card">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-orange text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-medical-orange-light rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900">Ready to take control of your healthcare?</h3>
                  <p className="mt-2 text-gray-700">
                    Join thousands of patients across India who are already experiencing the benefits of digital healthcare management.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="btn-accent">
                    Create Patient Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFeatures;
