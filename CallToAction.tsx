
import { Button } from "@/components/ui/button";
import { Hospital, User, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Transform Healthcare in India?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of hospitals, doctors, and patients already using HealConnect India to streamline healthcare delivery.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-3 text-lg rounded-lg flex items-center justify-center space-x-2">
              <Hospital className="h-5 w-5 mr-2" />
              <span>Register Hospital</span>
            </Button>
            
            <Button className="bg-medical-green hover:bg-medical-green-dark text-white px-8 py-3 text-lg rounded-lg flex items-center justify-center space-x-2">
              <User className="h-5 w-5 mr-2" />
              <span>Join as Doctor</span>
            </Button>
            
            <Button className="bg-medical-orange hover:bg-medical-orange-dark text-white px-8 py-3 text-lg rounded-lg flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Patient Sign Up</span>
            </Button>
          </div>
          
          <div className="mt-10 bg-white rounded-xl shadow-md p-6 mx-auto max-w-3xl">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose HealConnect India?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">End-to-end encrypted data</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Ayushman Bharat integration</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Multilingual support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Flexible payment options</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">24/7 technical support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Offline access capability</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Voice-assisted interface</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Compliant with data laws</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
