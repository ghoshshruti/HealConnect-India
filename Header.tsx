
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Hospital, User, Calendar, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Hospital className="h-8 w-8 text-medical-blue" />
              <span className="ml-2 text-xl font-bold text-gray-900 font-poppins">HealConnect <span className="text-medical-blue">India</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <nav className="flex space-x-8 mr-8">
              <a href="#features" className="text-base font-medium text-gray-700 hover:text-medical-blue">Features</a>
              <a href="#hospitals" className="text-base font-medium text-gray-700 hover:text-medical-blue">For Hospitals</a>
              <a href="#doctors" className="text-base font-medium text-gray-700 hover:text-medical-blue">For Doctors</a>
              <a href="#patients" className="text-base font-medium text-gray-700 hover:text-medical-blue">For Patients</a>
            </nav>
            <div className="flex space-x-4">
              <Button variant="outline" className="flex items-center">
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
              <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-medical-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-blue">Features</a>
            <a href="#hospitals" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-blue">For Hospitals</a>
            <a href="#doctors" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-blue">For Doctors</a>
            <a href="#patients" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-blue">For Patients</a>
            <div className="flex flex-col space-y-2 mt-4 px-3">
              <Button variant="outline" className="flex items-center justify-center">
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
              <Button className="flex items-center justify-center bg-medical-blue hover:bg-medical-blue-dark">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
