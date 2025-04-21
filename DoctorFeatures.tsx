
import { User, Video, FileText, Heart } from "lucide-react";

const features = [
  {
    name: "Doctor Dashboard",
    description: "Access a personalized dashboard to view appointments, patient history, medical reports, and feedback all in one place.",
    icon: User,
  },
  {
    name: "Teleconsultation Management",
    description: "Conduct secure video consultations with patients who cannot visit in person and monitor chronic conditions remotely.",
    icon: Video,
  },
  {
    name: "Prescription Management",
    description: "Write digital prescriptions, set medication reminders for patients, and order lab tests directly from the platform.",
    icon: FileText,
  },
  {
    name: "Health Education",
    description: "Share personalized health tips and preventive care guidance based on patient history and treatment plans.",
    icon: Heart,
  },
];

const DoctorFeatures = () => {
  return (
    <div id="doctors" className="bg-gray-50 py-12 sm:py-16">
      <div className="section-container">
        <div className="lg:text-center">
          <h2 className="text-base text-medical-green font-semibold tracking-wide uppercase">For Doctors</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Medical Practice
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Tools designed to help you provide better care, manage patients efficiently, and grow your practice.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="feature-card">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-green text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-5">
                  <div className="flex items-center space-x-4">
                    {feature.name === "Doctor Dashboard" && (
                      <div className="bg-blue-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">✓</span> View today's appointments
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Access patient records
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Review medical history
                        </p>
                      </div>
                    )}
                    {feature.name === "Teleconsultation Management" && (
                      <div className="bg-blue-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">✓</span> Secure video calls
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Chat with patients
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Remote patient monitoring
                        </p>
                      </div>
                    )}
                    {feature.name === "Prescription Management" && (
                      <div className="bg-blue-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">✓</span> Digital prescriptions
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Medication tracking
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Lab test ordering
                        </p>
                      </div>
                    )}
                    {feature.name === "Health Education" && (
                      <div className="bg-blue-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">✓</span> Personalized health tips
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Preventive care reminders
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-medium">✓</span> Treatment guidelines
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorFeatures;
