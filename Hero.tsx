
import { Button } from "@/components/ui/button";
import { Hospital, User, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Transform Healthcare in </span>
                <span className="block text-medical-blue xl:inline">India</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Connecting hospitals, doctors, and patients on one secure platform. Access medical records, book appointments, and receive quality healthcare from anywhere in India.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center bg-medical-blue hover:bg-medical-blue-dark px-8 py-3 text-base font-medium">
                    <Hospital className="mr-2 h-5 w-5" />
                    For Hospitals
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button className="w-full flex items-center justify-center bg-medical-green hover:bg-medical-green-dark px-8 py-3 text-base font-medium">
                    <User className="mr-2 h-5 w-5" />
                    For Doctors
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium border-medical-orange text-medical-orange hover:bg-medical-orange hover:text-white">
                    <Calendar className="mr-2 h-5 w-5" />
                    For Patients
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-medical-blue-light opacity-10 absolute"></div>
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Doctor with patient"
        />
      </div>
    </div>
  );
};

export default Hero;
